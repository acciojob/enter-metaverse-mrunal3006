//your JS code here. If required.
function enterMetaverse() {
	var statusElement = document.getElementById('status');

	statusElement.textContent= 'Entered Metaverse';

	var h1Element = document.createElement('h1');

		h1Element.textContent = 'Entered Metaverse';

	statusElement.parentNode.replaceChild(h1Element, statusElement);
}