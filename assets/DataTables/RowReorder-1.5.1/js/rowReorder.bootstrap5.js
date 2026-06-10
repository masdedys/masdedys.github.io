/*! Bootstrap 5 styling wrapper for RowReorder
 * © SpryMedia Ltd - datatables.net/license
 */

(function( factory ){
	if ( typeof define === 'function' && define.amd ) {
		// AMD
		define( ['jquery', 'datatables.net-bs5', 'datatables.net-rowreorder'], function () {
			return factory( window, document );
		} );
	}
	else if ( typeof exports === 'object' ) {
		// CommonJS
		var cjsRequires = function (root) {
			if ( ! root.DataTable ) {
				require('datatables.net-bs5')(root);
			}

			if ( ! window.DataTable.RowReorder ) {
				require('datatables.net-rowreorder')(root);
			}
		};

		if (typeof window === 'undefined') {
			module.exports = function (root, $) {
				if ( ! root ) {
					// CommonJS environments without a window global must pass a
					// root. This will give an error otherwise
					root = window;
				}

				cjsRequires( root );
				return factory( root, root.document );
			};
		}
		else {
			cjsRequires( window );
			module.exports = factory( window, window.document );
		}
	}
	else {
		// Browser
		factory( window, document );
	}
}(function( window, document ) {
'use strict';
var DataTable = window.DataTable;




return DataTable;
}));
