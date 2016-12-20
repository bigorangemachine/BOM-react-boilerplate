import React from 'react';
import AwesomeComponent from './AwesomeComponent.jsx';
import assert from 'assert';


//import React from "react";
import ReactDOM from "react-dom";
import TestUtils from "react-addons-test-utils";
import shallowTestUtils from "react-shallow-testutils";
// import jsdom from 'mocha-jsdom';
// I got error  document is not defined
// Resolved with help with - http://rvcode.com/scripting%20languages/2016/01/01/testing-react-js-isomorphic-components.html


var renderer = TestUtils.renderIntoDocument(<AwesomeComponent/>);
// var finded=TestUtils.findRenderedDOMComponentWithTag(renderer, 'button');
// console.log("renderer", renderer,"\nfinded: ",finded);

describe('Array', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            assert.equal(-1, [1, 2, 3].indexOf(4));
            assert.equal(-1, [1, 2, 3].indexOf(0));
        });
    });
    it('should return 1 when the value is in the 2nd position', function() {
        assert.equal(1, [1, 2, 3].indexOf(2));
        assert.equal(1, [4, 5, 6, 1, 2, 3].indexOf(5));
    });

});

describe('AwesomeComponent', function() {
    it('likesCount should be 0 (uninitiated)', function() {
        assert.equal(0, renderer.state.likesCount);
    });

    describe('AwesomeComponent - onLike Increment', function() {
        before(function(){
            renderer.onLike();
        });
        it('likesCount should be 1 (initiated)', function() {
            assert.equal(1, renderer.state.likesCount);
        });
    });
});
