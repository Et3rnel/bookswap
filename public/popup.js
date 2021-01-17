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