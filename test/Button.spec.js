import React     from 'react';
import chai      from 'chai';
import TestUtils from 'react-addons-test-utils';

import Button from '../components/Button.js';
import Label from '../components/Label.js';

describe('Button', () => {
    const expect = chai.expect;
    let renderedComponent;

    before('render and locate element', function() {
        renderedComponent = TestUtils.renderIntoDocument(
          <Button name="John"/>
        );
    });

    it('works', () => {
        let labelElement = TestUtils.findRenderedComponentWithType(renderedComponent, Label);
        let actual = TestUtils.findRenderedDOMComponentWithTag(labelElement, "span").textContent;
        let expected = "Hello John";
        expect(actual).to.equal(expected);
    });
});