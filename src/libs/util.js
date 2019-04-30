let util = {

};
util.title = function (title) {
    title = title ? title + ' - 想象力商城后台管理系统' : '想象力商城后台管理系统';
    window.document.title = title;
};

export default util;