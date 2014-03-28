// -----------------------------------------------------------------------------
// TinyModal JavaScript
// by Josh Forisha <josh@forisha.com>
// -----------------------------------------------------------------------------

window.TinyModal = {

    /**
     * Displays a modal window of supplied height and width, populated with the
     * given elements as an array.
     *
     * @param {Number} width - How many pixels wide the modal box should be
     * @param {Number} height - How many pixels tall the modal box should be
     * @param {Array, Element} elements - An array of elements to populate the
     *     modal box with
     */
    open: function (width, height, elements) {
        // Build mask if we don't already have it
        if (!this.hasOwnProperty('mask')) {
            this.mask = document.createElement('div');
            this.mask.style['background-color'] = 'rgba(0,0,0, 0.6)';
            this.mask.style['display'] = 'block';
            this.mask.style['height'] = '100%';
            this.mask.style['left'] = 0;
            this.mask.style['overflow'] = 'hidden';
            this.mask.style['position'] = 'fixed';
            this.mask.style['top'] = 0;
            this.mask.style['width'] = '100%';
            this.mask.style['z-index'] = 100;
            this.mask.addEventListener('click', TinyModal.close.bind(this), false);
            document.body.appendChild(this.mask);
        }
        else this.mask.style['display'] = 'block';

        // Create the modal box
        var box = document.createElement('div');
        box.setAttribute('id', 'TinyModalBox');
        box.style['background-color'] = '#fff';
        box.style['height'] = height + 'px';
        box.style['left'] = '50%';
        box.style['margin-left'] = '-' + Math.round(width / 2) + 'px';
        box.style['margin-top'] = '-' + Math.round(height / 2) + 'px';
        box.style['position'] = 'fixed';
        box.style['top'] = '50%';
        box.style['width'] = width + 'px';
        box.style['z-index'] = 101;

        // Populate the modal box
        if (elements instanceof Array === false) {
            elements = [ elements ];
        }
        for (var i = 0, l = elements.length; i < l; i++) {
            box.appendChild(elements[i]);
        }

        // Replace or append the new modal box
        if (this.hasOwnProperty('box')) {
            document.body.replaceChild(box, this.box);
            this.box = box;
        } else {
            document.body.appendChild(box);
        }
        this.box = box;
    },

    /**
     * Closes the open modal box.
     */
    close: function () {
        if (this.hasOwnProperty('box')) {
            this.mask.style['display'] = 'none';
            document.body.removeChild(this.box);
            delete this.box;
        }
    }
};
