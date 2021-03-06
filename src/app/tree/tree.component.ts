import { Component, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { Injectable } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { BehaviorSubject, Observable, of as observableOf } from 'rxjs';
import { XpressdoxInterviewComponent } from '../xpressdox-interview/xpressdox-interview.component';
import { XpressdoxInterviewDirective } from '../xpressdox-interview/xpressdox-interview.directive';

/**
* File node data with nested structure.
* Each node has a filename, and a type or a list of children.
*/
export class FileNode {
	children: FileNode[];
	filename: string;
	type: any;
}

/** Flat node with expandable and level information */
export class FileFlatNode {
	filename: string;
	type: any;
	level: number;
	expandable: boolean;
}

/**
* The file structure tree data in string. The data could be parsed into a Json object
*/
const TREE_DATA = `
{
	"Users": {
		"Nick": {
			"Docs": {
				"Simple Template": "677774c3-bdac-43fc-ad84-9e00777da5bf",
				"Fax Cover Example": "8a15ac0e-f8c4-4527-9f03-b799162f6985"
			}
		},

		"Peter": {
			"Personal Docs Docs": {
				"Simple Template": "aca1a8ae-5f66-45d9-81e7-5e147035b670"
			}
		}
	}
}`;

/**
* File database, it can build a tree structured Json object from string.
* Each node in Json object represents a file or a directory. For a file, it has filename and type.
* For a directory, it has filename and children (a list of files or directories).
* The input will be a json object string, and the output is a list of `FileNode` with nested
* structure.
*/
@Injectable()
export class FileDatabase {
	dataChange: BehaviorSubject<FileNode[]> = new BehaviorSubject<FileNode[]>([]);

	get data(): FileNode[] { return this.dataChange.value; }

	constructor() {
		this.initialize();
	}

	initialize() {
		// Parse the string to json object.
		const dataObject = JSON.parse(TREE_DATA);

		// Build the tree nodes from Json object. The result is a list of `FileNode` with nested
		//     file node as children.
		const data = this.buildFileTree(dataObject, 0);

		// Notify the change.
		this.dataChange.next(data);
	}

	/**
	* Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
	* The return value is the list of `FileNode`.
	*/
	buildFileTree(value: any, level: number): FileNode[] {
		let data: any[] = [];
		for (let k in value) {
			let v = value[k];
			let node = new FileNode();
			node.filename = `${k}`;
			if (v === null || v === undefined) {
			// no action
			} else if (typeof v === 'object') {
				node.children = this.buildFileTree(v, level + 1);
			} else {
				node.type = v;
			}
			data.push(node);
		}
		return data;
	}
}

/**
* @title Tree with flat nodes
*/
@Component({
	selector: 'app-tree',
	templateUrl: './tree.component.html',
	styleUrls: ['./tree.component.css'],
	providers: [FileDatabase]
})
export class TreeComponent implements OnInit {

	@ViewChild(XpressdoxInterviewDirective) xdInterview: XpressdoxInterviewDirective;

	ngOnInit() { }

	public loadInterview(templateIdentifier) {
		let componentFactory = this.componentFactoryResolver.resolveComponentFactory(XpressdoxInterviewComponent);

		let viewContainerRef = this.xdInterview.viewContainerRef;
		viewContainerRef.clear();

		let componentRef = viewContainerRef.createComponent(componentFactory);
		(<XpressdoxInterviewComponent>componentRef.instance)._templateIdentifier = templateIdentifier;
	}

	treeControl: FlatTreeControl<FileFlatNode>;

	treeFlattener: MatTreeFlattener<FileNode, FileFlatNode>;

	dataSource: MatTreeFlatDataSource<FileNode, FileFlatNode>;

	constructor(database: FileDatabase, private componentFactoryResolver: ComponentFactoryResolver) {
		this.treeFlattener = new MatTreeFlattener(this.transformer,
			this._getLevel,
			this._isExpandable,
			this._getChildren);
		this.treeControl = new FlatTreeControl<FileFlatNode>(this._getLevel, this._isExpandable);
		this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

		database.dataChange.subscribe(data => {
			this.dataSource.data = data;
		});
	}

	transformer = (node: FileNode, level: number) => {
		let flatNode = new FileFlatNode();
		flatNode.filename = node.filename;
		flatNode.type = node.type;
		flatNode.level = level;
		flatNode.expandable = !!node.children;
		return flatNode;
	}

	private _getLevel = (node: FileFlatNode) => { return node.level; };

	private _isExpandable = (node: FileFlatNode) => { return node.expandable; };

	private _getChildren = (node: FileNode): Observable<FileNode[]> => {
		return observableOf(node.children);
	}

	hasChild = (_: number, _nodeData: FileFlatNode) => { return _nodeData.expandable; };
}
