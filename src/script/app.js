/* ͨ��Ӧ�ù��� */

var app = (function () {
    'use strict';

    var app = {};

    app.bindingID = 'myBinding';

    // ͨ�ó�ʼ������(ÿҳ�϶�Ҫ����)��
    app.initialize = function () {
        $('body').append(
            '<div id="notification-message">' +
                '<div class="padding">' +
                    '<div id="notification-message-close"></div>' +
                    '<div id="notification-message-header"></div>' +
                    '<div id="notification-message-body"></div>' +
                '</div>' +
            '</div>');

        $('#notification-message-close').click(function () {
            $('#notification-message').hide();
        });


        // ��ʼ�����빫��ͨ��֪ͨ������
        app.showNotification = function (header, text) {
            $('#notification-message-header').text(header);
            $('#notification-message-body').text(text);
            $('#notification-message').slideDown('fast');
        };
    };

    return app;
})();a