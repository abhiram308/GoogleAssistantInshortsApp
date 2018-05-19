const request = require('request');
const cheerio = require('cheerio');
const _ = require('lodash');

const initFeedUrl = 'https://www.inshorts.com/en/read/';

exports.getNewsFromInshorts = function callapi() {
	return new Promise((resolve, reject) => {
		request(initFeedUrl, { json: true }, (err, res, body) => {
			if(err) {
				reject();
			}
			if(res.statusCode == 200) {
				const $ = cheerio.load(body);
				var news = new Array();
				_.forEach($("[itemprop='articleBody']"), function(_news) {
					news.push(_news.children[0].data);
				});
				resolve(news.join(' Next Item, '))
			}
			else {
				err = "Error getting response from inshorts";
				reject();
			}
		});
	});
}