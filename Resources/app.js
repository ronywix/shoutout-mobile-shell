
function includeAll (){
	
	Ti.Stream;
	Ti.Codec;
	Ti.Utils;
	Ti.XML;
	Ti.Accelerometer;
	Ti.API;
	Ti.App;
	Ti.Calendar;
	Ti.Contacts;
	Ti.Database;
	Ti.Filesystem;
	Ti.Geolocation;
	Ti.Gesture;
	Ti.Media;
	Ti.Network;
	Ti.Network.Socket;
	Ti.Platform;
	Ti.Yahoo;
	
	Ti.UI;
	Ti.UI.createTab;
	Ti.UI.createLabel;
	Ti.UI.createButton;
	Ti.UI.createProgressBar;
	Ti.UI.createSearchBar;
	Ti.UI.createActivityIndicator;
	Ti.UI.createSlider;
	Ti.UI.createSwitch;
	Ti.UI.createPicker;
	Ti.UI.createToolbar;
	Ti.UI.createTextArea;
	Ti.UI.createTextField;
	Ti.UI.createImageView;
	Ti.UI.createMaskedImage;
	Ti.UI.createWebView;
	Ti.UI.createWindow;
	Ti.UI.createView;
	Ti.UI.createOptionDialog;
	Ti.UI.createEmailDialog;
	Ti.UI.createDashboardView;
	Ti.UI.createScrollView;
	Ti.UI.createScrollableView;
	Ti.UI.createTableView;
	Ti.UI.createListView;
	Ti.UI.create2DMatrix;
	Ti.UI.create3DMatrix;
	Ti.UI.createAnimation;
	Ti.UI.createCoverFlowView;
	Ti.UI.createTabbedBar;
	
	Ti.UI.iPhone;
	Ti.UI.iPhone.RowAnimationStyle;
	Ti.UI.iPhone.StatusBar;
	Ti.UI.iPhone.SystemIcon;
	Ti.UI.iPhone.SystemButtonStyle;
	Ti.UI.iPhone.SystemButton;
	Ti.UI.iPhone.ActivityIndicatorStyle;
	Ti.UI.iPhone.AnimationStyle;
	Ti.UI.iPhone.ProgressBarStyle;
	Ti.UI.iPhone.ScrollIndicatorStyle;
	Ti.UI.iPhone.TableViewStyle;
	Ti.UI.iPhone.TableViewSeparatorStyle;
	Ti.UI.iPhone.TableViewScrollPosition;
	Ti.UI.iPhone.TableViewCellSelectionStyle;
	Ti.UI.iPhone.AlertDialogStyle;
	Ti.UI.iPhone.ListViewStyle;
	Ti.UI.iPhone.ListViewScrollPosition;
	Ti.UI.iPhone.ListViewCellSelectionStyle;
	Ti.UI.iPhone.ListViewSeparatorStyle;
	
	Ti.UI.Clipboard;
	
	Ti.UI.iPad.createPopover;
	Ti.UI.iPad.createSplitWindow;
	Ti.UI.iPad.createDocumentViewer;
	
	Ti.UI.iOS;
	Ti.UI.iOS.createAdView;
	Ti.UI.iOS.create3DMatrix;
	Ti.UI.iOS.createCoverFlowView;
	Ti.UI.iOS.createToolbar;
	Ti.UI.iOS.createTabbedBar;
	Ti.UI.iOS.createDocumentViewer;
	Ti.UI.iOS.createNavigationWindow;
	Ti.UI.iOS.createAttributedString;
	
	Ti.App.iOS;
	Ti.UI.iOS.createAnimator;
	Ti.UI.iOS.createSnapBehavior;
	Ti.UI.iOS.createPushBehavior;
	Ti.UI.iOS.createGravityBehavior;
	Ti.UI.iOS.createAnchorAttachmentBehavior;
	Ti.UI.iOS.createViewAttachmentBehavior;
	Ti.UI.iOS.createCollisionBehavior;
	Ti.UI.iOS.createDynamicItemBehavior;
	Ti.UI.iOS.createTransitionAnimation;
	Ti.UI.createRefreshControl;
}

Ti.include("http-1.0.2.js");
Ti.include("tipack/tipack4js-client.js");
Ti.include("tipack/tipack4js-utils.js");

function progressCallback(e)
{
  
}

includeAll();

tipack.Loader.loadDefault({
    defaultProjectId : "com.wix.shoutout.app-alpha",
    defaultUseLatest: true,
    defaultMaxFailedRuns:1,
    callback:progressCallback
});
