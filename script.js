/**
 * Created by jeewendrakumar on 5/28/2017.
 */

function addItemToList() {
    var text = document.getElementById('addInputText').value || 'Default Text';
    var ulList = document.querySelector('ul');
    var liElement = document.createElement('li');
    var textNode = document.createTextNode(text);
    liElement.appendChild(textNode);
    document.getElementById("ul-list").appendChild(liElement);
    document.getElementById('addInputText').value = "";
}
