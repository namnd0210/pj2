/**
 * @license Copyright (c) 2014-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor.js';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote.js';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold.js';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder.js';
import CKFinderUploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter.js';
import Image from '@ckeditor/ckeditor5-image/src/image.js';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle.js';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload.js';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic.js';
import Link from '@ckeditor/ckeditor5-link/src/link.js';
import List from '@ckeditor/ckeditor5-list/src/list.js';
import Code from '@ckeditor/ckeditor5-basic-styles/src/code.js';
import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock.js';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize.js';
import Mention from '@ckeditor/ckeditor5-mention/src/mention.js';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough.js';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials.js';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph.js';

export default class Editor extends ClassicEditor { }

// Plugins to include in the build.
Editor.builtinPlugins = [
	BlockQuote,
	Bold,
	CKFinder,
	CKFinderUploadAdapter,
	Image,
	ImageStyle,
	ImageUpload,
	Italic,
	Link,
	List,
	Code,
	CodeBlock,
	ImageResize,
	Mention,
	Strikethrough,
	Essentials,
	Paragraph
];

Editor.defaultConfig = {
	toolbar: {
		items: [
			'|',
			'bold',
			'italic',
			'strikethrough',
			'code',
			'link',
			'bulletedList',
			'numberedList',
			'|',
			'undo',
			'redo',
			'imageUpload',
			'|'
		]
	},
	language: 'en',
	licenseKey: '',
}

