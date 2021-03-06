/**
 * @fileoverview Enforce that elements with onClick handlers must be focusable.
 * @author Ethan Cohen
 */

'use strict';

// -----------------------------------------------------------------------------
// Requirements
// -----------------------------------------------------------------------------

import rule from '../../../src/rules/onclick-has-focus';
import { RuleTester } from 'eslint';

const parserOptions  = {
  ecmaVersion: 6,
  ecmaFeatures: {
    jsx: true
  }
};

// -----------------------------------------------------------------------------
// Tests
// -----------------------------------------------------------------------------

const ruleTester = new RuleTester();

const  expectedError  = {
  message: 'Elements with onClick handlers must be focusable. ' +
    'Either set the tabIndex property (usually 0), or use an element type which ' +
    'is inherently focusable such as `button`.',
  type: 'JSXOpeningElement'
};

ruleTester.run('onclick-has-focus', rule, {
  valid: [
    { code: '<div />', parserOptions },
    { code: '<div aria-hidden onClick={() => void 0} />', parserOptions },
    { code: '<input type="text" onClick={() => void 0} />', parserOptions },
    { code: '<input type="hidden" onClick={() => void 0} tabIndex="-1" />', parserOptions },
    { code: '<input onClick={() => void 0} />', parserOptions },
    { code: '<button onClick={() => void 0} className="foo" />', parserOptions },
    { code: '<option onClick={() => void 0} className="foo" />', parserOptions },
    { code: '<select onClick={() => void 0} className="foo" />', parserOptions },
    { code: '<area href="#" onClick={() => void 0} className="foo" />', parserOptions },
    { code: '<textarea onClick={() => void 0} className="foo" />', parserOptions },
    { code: '<a tabIndex="0" onClick={() => void 0} />', parserOptions },
    { code: '<a role="button" href="#" onClick={() => void 0} />', parserOptions },
    { code: '<a onClick={() => void 0} href="http://x.y.z" />', parserOptions },
    { code: '<a onClick={() => void 0} href="http://x.y.z" tabIndex="0" />', parserOptions },
    { code: '<TestComponent onClick={doFoo} />', parserOptions },
    { code: '<input onClick={() => void 0} type="hidden" />;', parserOptions },
    { code: '<span onClick="doSomething();" tabIndex="0">Click me!</span>', parserOptions },
    { code: '<span onClick="doSomething();" tabIndex="0">Click me!</span>', parserOptions },
    { code: '<span onClick="doSomething();" tabIndex="-1">Click me too!</span>', parserOptions },
    { code: '<a href="javascript:void(0);" onClick="doSomething();">Click ALL the things!</a>', parserOptions },
    { code: '<Foo.Bar onClick={() => void 0} aria-hidden={false} />;', parserOptions }
  ],

  invalid: [
    { code: '<span onClick="submitForm();">Submit</span>', errors: [ expectedError ], parserOptions },
    { code: '<span onClick="submitForm();" tabIndex={undefined}>Submit</span>', errors: [ expectedError ], parserOptions },
    { code: '<a onClick="showNextPage();">Next page</a>', errors: [ expectedError ], parserOptions },
    { code: '<area onClick={() => void 0} className="foo" />', errors: [ expectedError ], parserOptions },
    { code: '<div onClick={() => void 0} />;', errors: [ expectedError ], parserOptions },
    { code: '<div onClick={() => void 0} role={undefined} />;', errors: [ expectedError ], parserOptions },
    { code: '<div onClick={() => void 0} {...props} />;', errors: [ expectedError ], parserOptions },
    { code: '<section onClick={() => void 0} />;', errors: [ expectedError ], parserOptions },
    { code: '<main onClick={() => void 0} />;', errors: [ expectedError ], parserOptions },
    { code: '<article onClick={() => void 0} />;', errors: [ expectedError ], parserOptions },
    { code: '<header onClick={() => void 0} />;', errors: [ expectedError ], parserOptions },
    { code: '<footer onClick={() => void 0} />;', errors: [ expectedError ], parserOptions },
    { code: '<div onClick={() => void 0} aria-hidden={false} />;', errors: [ expectedError ], parserOptions },
    { code: '<a onClick={() => void 0} />', errors: [ expectedError ], parserOptions }
  ]
});
