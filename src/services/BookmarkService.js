import browser from "webextension-polyfill";

// Constants
const otherBookmarksId = '2';

// Service
const BookmarkService = {
    fetchOtherBookmarks: async function(value) {
        let subTree = await browser.bookmarks.getSubTree(otherBookmarksId);
        return subTree[0].children;
    },

    /**
     * Count the amount of bookmarks in the specified folder
     * @param {string} folderId 
     */
    countBookmarksInFolder: async function(folderId) {
        let bookmarks = await browser.bookmarks.getSubTree(folderId);
        return bookmarks[0].children.length;
    }
};

export default BookmarkService;