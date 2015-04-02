/**
 * @module ui/main.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Main
 * @extends Component
 */
exports.Main = Component.specialize(/** @lends Main# */ {
    constructor: {
        value: function Main() {
            this.super();
        }
    },
    words: {
        value: null,
    },
    _text: {
        value: null,
    },
    "text": {
        set: function(value) {
            this.words = value.split(" ");
        }
    }
});
