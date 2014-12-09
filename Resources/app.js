

function includeAll (){
	Ti.UI.Clipboard;
	Ti.UI.create2DMatrix();
	Ti.UI.createAnimation();
	Ti.UI.createLabel();
	Ti.UI.createButton();
	Ti.UI.createTextField();
	Ti.UI.createTableView();
	Ti.UI.createListView();
	Ti.UI.createListSection();
	Ti.UI.createScrollView();
	Ti.UI.createScrollableView();
	Ti.UI.createEmailDialog();
	Ti.UI.createWebView();
	Ti.UI.iOS.createNavigationWindow();
	Ti.UI.iPhone.ListViewCellSelectionStyle;
	Ti.UI.iPhone.RowAnimationStyle;
	Ti.Media;
}


Ti.include("http-1.0.2.js");
Ti.include("tipack/tipack4js-client.js");
Ti.include("tipack/tipack4js-utils.js");

function progressCallback(e)
{
  
}

tipack.Loader.loadDefault({
    defaultProjectId : "com.wix.shoutout.app-alpha",
    defaultUseLatest: true,
    defaultMaxFailedRuns:1,
    callback:progressCallback
});
