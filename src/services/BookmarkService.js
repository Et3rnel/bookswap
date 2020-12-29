import browser from "webextension-polyfill";

// Constants
const otherBookmarksId = '2';

// Service
const BookmarkService = {
    fetchOtherBookmarks: async function(value) {
        let subTree = await browser.bookmarks.getSubTree(otherBookmarksId);
        return subTree[0].children;
    },
};

export default BookmarkService;