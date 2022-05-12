// import pubSub from "pubsub-js"

tinymce.PluginManager.add('file', function (editor, url) {
  var pluginName = '插入图片';
  // 注册一个工具栏按钮名称
  editor.ui.registry.addButton('file', {

    icon: 'image',
    tooltip: pluginName,
    onAction: function () {
      if (typeof editor.settings.clickImage === 'function') {

        return editor.settings.clickImage(editor)
      }
      return null
    }
  });


  return {
    getMetadata: function () {
      return {
        //插件名和链接会显示在“帮助”→“插件”→“已安装的插件”中
        name: "Example plugin",//插件名称
        url: "http://exampleplugindocsurl.com", //作者网址
      };
    }
  };
});
