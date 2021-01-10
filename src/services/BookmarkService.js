import browser from "webextension-polyfill";

// Constants
const barBookmarkId = '1';
const otherBookmarksId = '2';

// Service
const BookmarkService = {
  fetchBookmarkBarNode: async function() {
    let subTree = await browser.bookmarks.get(barBookmarkId);
    return subTree[0].children;
  },
    
  fetchOtherBookmarks: async function() {
    let subTree = await browser.bookmarks.getSubTree(otherBookmarksId);
    return subTree[0].children;
  },

  fetchBarBookmarks: async function() {
    let subTree = await browser.bookmarks.getSubTree(barBookmarkId);
    return subTree[0].children;
  },

  fetchBookmarks: async function(folderId) {
    let subTree = await browser.bookmarks.getSubTree(folderId);
    return subTree[0].children;
  },

  /**
   * Set the current bar name in the browser(chrome) storage API
   * @param {string} name 
   */
  setCurrentBarName: async function(name) {
    return await browser.storage.sync.set({currentBarName: name});
  },

  /**
   * Count the amount of bookmarks in the specified folder
   * @param {string} folderId 
   */
  countBookmarksInFolder: async function(folderId) {
    let bookmarks = await browser.bookmarks.getSubTree(folderId);
    return bookmarks[0].children.length;
  },

  /**
   * Fetchs the current bar name and returns null if doesn't exist
   */
  fetchCurrentBarName: async function() {
    let result = await browser.storage.sync.get(['currentBarName']);
    return result.currentBarName;
  },

  /**
   * Creates a folder in the "Other bookmarks" root folder
   * @param {string} folderName
   * @returns {BookmarkTreeNode}
   */
  createFolderInOtherBookmarks: async function(folderName) {
    return await browser.bookmarks.create(
      {
        parentId: otherBookmarksId,
        title: folderName
      }
    )
  },

  moveBarBookmarks: async function(folderId) {
    let barBookmarks = await this.fetchBarBookmarks();

    // TODO : faire un promise.all ? jsp
    barBookmarks.forEach(function(child) {
      browser.bookmarks.move(
        child.id,
        {
          parentId: folderId
        }
      )
    })
  },

  moveFolderToBar: async function(folderId) {
    let bookmarkTreeNodes = await this.fetchBookmarks(folderId);

    // TODO : pareil voir pour faire un promise all
    bookmarkTreeNodes.forEach(function(child) {
      browser.bookmarks.move(
        child.id,
        {
          parentId: barBookmarkId
        }
      )
    });
    
    browser.bookmarks.remove(folderId)
    await this.setCurrentBarName('Todo change lol');
  }
};

export default BookmarkService;