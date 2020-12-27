const bookmarkBarId = '1';
const otherBookmarksId = '2';
const defaultBarTitle = "Default's bar";
let bookmarks = document.getElementById('bookmarks');

/**
 * Set the current bar name in the chrome storage API
 * @param {string} name 
 */
function setCurrentBarName(name) {
    chrome.storage.sync.set({currentBarName: name});
}

/**
 * Checks if the node is a folder (group) or a bookmark
 * @param {BookmarkTreeNode} child 
 */
function isFolder(child) {
    return !child.hasOwnProperty('url');
}

function createBarFolder(folderId) {
    chrome.storage.sync.get('currentBarName', function(result) {
        chrome.bookmarks.create(
            {
                parentId: otherBookmarksId,
                title: result.currentBarName
            },
            function(bookmarkTreeNode) {
                moveBookmarkBar(bookmarkTreeNode.id, folderId);
            }
        )
    });
}

function moveBookmarkBar(createdFolderId, choosenFolderId) {
    chrome.bookmarks.getSubTree(bookmarkBarId, function(results) {
        results[0].children.forEach(function(child) {
            chrome.bookmarks.move(
                child.id,
                {
                    parentId: createdFolderId
                }
            )
        });
        
        // We will make this function synchrone when using Manifest V3
        moveCurrentFolderToBar(choosenFolderId);
    });
}

function moveCurrentFolderToBar(choosenFolderId) {
    chrome.bookmarks.getSubTree(choosenFolderId, function(bookmarkTreeNodes) {
        const choosenFolderTreeNode = bookmarkTreeNodes[0];
        choosenFolderTreeNode.children.forEach(function(child) {
            chrome.bookmarks.move(
                child.id,
                {
                    parentId: bookmarkBarId
                }
            )
        });

        chrome.bookmarks.remove(choosenFolderId)

        setCurrentBarName(choosenFolderTreeNode.title);
        createPopupTree();
    });
}

function createPopupTree() {
    chrome.bookmarks.getSubTree(otherBookmarksId, function(results) {
        bookmarks.innerHTML = "";
        let otherBookmarks = results[0];
        otherBookmarks.children.forEach(function(child) {
            if (!isFolder(child)) {
                return; 
            }
            var group = document.createElement('li');
            group.classList.add('bookmark');
            group.dataset.id = child.id
            group.innerText = child.title;
            group.addEventListener('click', function() {
                createBarFolder(child.id);
            });

            tippy(group, {
                content: '2 bookmarks',
              });

            bookmarks.appendChild(group);
        });
    });
}

function countBookmarks() {
    
}

createPopupTree();