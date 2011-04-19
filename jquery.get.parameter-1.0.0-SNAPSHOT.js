// The MIT License
// 
// Copyright (c) 2011 Valle del Bit
// 
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// 
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
// 
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.


// Autor: 		Mario Rivera Angeles (lis.mario.rivera@gmail.com)
// Twitter:  	twitter.com/mra_capri
// Objetivo: 	Extension que tiene como objetivo obtener los valores de QueryString
// Version: 	1.0.0-SNAPSHOT

/**
 * Inicia closure de la extension
 */
(function($) {

	/**
	 * Extension jQuery de valle del bit que tiene como objetivo obtener los valores de QueryString
	 * @param {array} [options] Recibe el arreglo de opciones del plugin
	 * @return {object} 
	 */
	$.extend({
		getParameter: function (parameterName) { 
                parName = parameterName.replace(/[\[]/, '\\\[').replace(/[\]]/, '\\\]');
                var pattern = '[\\?&]' + parameterName + '=([^&#]*)';
                var regex = new RegExp(pattern);
                var matches = regex.exec(window.location.href);
                if (matches == null) return '';
                else return decodeURIComponent(matches[1].replace(/\+/g, ' '));
            }
		}
	);

})(jQuery);