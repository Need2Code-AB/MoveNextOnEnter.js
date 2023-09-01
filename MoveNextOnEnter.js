'use strict';

$(function () {
    MoveNextOnEnter.init();
});

var MoveNextOnEnter = {
    init: function(s) {
        try {
            if (s === undefined) {
                this.selector = 'input[type="text"]:not([readonly]):not([disabled]):not(.overidedefault):visible,input[type="number"]:not([readonly]):not([disabled]):visible,input[type="date"]:not([disabled]):not([readonly]):visible,select:not(.overidedefault):not([disabled]):visible';
            }
            else {
                this.selector = s;
            }
            this.Elements = $(this.selector).toArray();
            $(this.selector)
                .keydown((e) => this.handleKeyDown(e))
                .focus((e) => this.focus(e));

            console.info('MoveNextOnEnter.init()');
        } catch (err) {
            console.error('Error in MoveNextOnEnter.init():', err);
        }
    },
    handleKeyDown: function (e) {
        try {
            if (e.which === 13 || e.which === 10) { // 13 = Enter, 10 = Keypad Enter
                if (!this._preventDefault) {
                    if (this.enabled) {
                        this.currentIndex = this.Elements.indexOf(e.target);
                        this.nextIndex = this.haltOnCurrent ? this.currentIndex : this.currentIndex + 1;

                        if (this.nextIndex < this.Elements.length) {
                            $(this.Elements[this.nextIndex]).focus();
                        } else {
                            this.doAutoSubmit();
                        }

                        e.preventDefault();
                    }
                }
                this._preventDefault = false;
            }
        } catch (err) {
            console.error('An error occurred in handleKeyDown:', err);
        }
    },
    focus: function (e) {
        try {
            this.currentIndex = this.Elements.indexOf(e.target);
            console.info('focus on: ' + $(e.target).attr('name'));
        } catch (err) {
            console.error('An error occurred in focus:', err);
        }
    },
    doAutoSubmit: function() {
        if (this.autoSubmit) {
            $(this.autoSubmitSelector).click();
        }
    },
    addElement: function(e) {
        this.Elements.push($(e)[0]);
        this.Elements = $.unique(this.Elements);
    },
    addElementAt: function(i, e) {
        this.Elements.splice(i, 0, $(e)[0]);
        this.Elements = $.unique(this.Elements);
    },
    removeElement: function(e) {
        const index = this.Elements.indexOf($(e)[0]);
        if (index > -1) {
            this.Elements.splice(index, 1);
        }
    },
    reInit: function(enableAutoSubmit) {
        this.nextIndex = 0;
        this.currentIndex = 0;
        this.init(enableAutoSubmit);
    },
    focusLast: function() {
        $(this.Elements)
            .last()
            .focus();
        this.currentIndex = this.Elements.length - 1;
    },
    focusFirst: function() {
        $(this.Elements)
            .first()
            .focus();
        this.currentIndex = 0;
    },
    isLast: function() {
        return this.currentIndex === this.Elements.length - 1;
    },
    setFocus: function(element) {
        var index = this.Elements.indexOf(element);
        this.currentIndex = index;
        this.nextIndex = index;
        if (this.isLast() && this.autoSubmit) {
            $(this.autoSubmitSelector).click();
        } else {
            index++;
        }
        $(this.Elements[index]).focus();
        this.currentIndex = index;
    },
    // Properties
    haltOnCurrent: false,
    autoSubmit: true,
    autoSubmitSelector: 'input[type="submit"], button[type="submit"], #btnSubmit',
    selector: '',
    Elements: [],
    _preventDefault: false,
    currentIndex: 0,
    nextIndex: 0,
    enabled: true,
};
