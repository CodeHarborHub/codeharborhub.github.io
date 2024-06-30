/*global $, jQuery, alert, console, angular*/
/**
 *
 * @authors Ted Shiu (tedshd@gmail.com)
 * @date    2014-03-01 23:51:21
 * @version $Id$
 */

function ScrollProgress (option) {
    console.log('init');
    var d4 = {
        position: 'top',
        thick: 5,
        color: 'red'
    };
    var percent;
    var dom = document.querySelector('body'),
        progress = document.createElement('div'),
        div = document.createElement('div');

    option = option || {};
    option.position = option.position || d4.position;
    option.thick = option.thick || d4.thick;
    option.color = option.color || d4.color;

    // init position
    switch(option.position) {
        case 'top':
            progress.style.top = 0;
            progress.style.left = 0;
            progress.style.width = '100%';
            progress.style.height = option.thick + 'px';
            div.style.height = '100%';
        break;
        case 'bottom':
            progress.style.bottom = 0;
            progress.style.left = 0;
            progress.style.width = '100%';
            progress.style.height = option.thick + 'px';
            div.style.height = '100%';
        break;
        case 'left':
            progress.style.top = 0;
            progress.style.left = 0;
            progress.style.width = option.thick + 'px';
            progress.style.height = '100%';
            div.style.width = '100%';
        break;
        case 'right':
            progress.style.top = 0;
            progress.style.right = 0;
            progress.style.width = option.thick + 'px';
            progress.style.height = '100%';
            div.style.width = '100%';
        break;
        default:
        return;
    }

    // detect scroll progress
    window.addEventListener('scroll', function() {
        if (dom.scrollTop) {
            percent = (dom.scrollTop/(dom.scrollHeight - document.documentElement.clientHeight))*100 + '%';
        } else {
            percent = (window.pageYOffset/(dom.scrollHeight - document.documentElement.clientHeight))*100 + '%';
        }
        if (option.position === 'top' || option.position === 'bottom') {
            div.style.width = percent;
        }
        if (option.position === 'left' || option.position === 'right') {
            div.style.height = percent;
        }
    });

    div.style.backgroundColor = option.color;
    progress.setAttribute('class', 'scroll_progress');
    progress.appendChild(div);
    dom.appendChild(progress);
}

window.ScrollProgress = ScrollProgress;
