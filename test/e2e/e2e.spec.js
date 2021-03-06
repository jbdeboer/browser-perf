var expect = require('chai').expect,
	browserPerf = require('../../');

describe('End To End Test Cases', function() {
	it('fails if selenium is not running', function(done) {
		browserPerf('http://google.com', function(err, res) {
			expect(err).to.not.be.null;
			expect(err).to.not.be.empty;
			expect(res).to.be.empty;
			done();
		}, {
			selenium: 'nohost:4444'
		});
	});

	describe('gets enough statistics from browsers', function() {
		it('should work for a sample page', function(done) {
			browserPerf('https://en.wikipedia.org/wiki/Portal:Contents/Categories', function(err, res) {
				if (err) {
					console.log(err);
				}
				expect(err).to.be.empty;
				expect(res).to.not.be.empty;
				done();
			}, {
				selenium: process.env.SELENIUM || 'http://localhost:4444/wd/hub',
				username: process.env.USERNAME,
				accesskey: process.env.ACCESSKEY,
				browsers: [{
					browserName: 'chrome',
					version: 32
				}, {
					browserName: 'firefox'
				}]
			});
		});
	});
});