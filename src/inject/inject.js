var addNsfwClass = $('.entry .nsfw-stamp')
  .parents('.entry')
  .find('a.title')
  .addClass('nsfw-ext');

chrome.extension.sendMessage({}, function(response) {
  setTimeout(addNsfwClass, 50)

	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "interactive") {
		clearInterval(readyStateCheckInterval);
    addNsfwClass
	}
	}, 10);
});