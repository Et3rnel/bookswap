const bookmarkBarId = '1';
const otherBookmarksId = '2';
const defaultBarTitle = "Default's bar";

/**
 * Checks if the node is a folder (group) or a bookmark
 * @param {BookmarkTreeNode} child
 */
function isFolder(child) {
  return !child.hasOwnProperty('url');
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