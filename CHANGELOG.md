1.0.4 / 2016-04-28
==================
- [fix] Add expression value handler for `ConditionalExpression` type.


1.0.3 / 2016-04-25
==================
- [fix] Fix typo in recommended rules for `onclick-has-focus`.


1.0.2 / 2016-04-20
==================
- [fix] Add expression value handler for `ThisExpression` type.


1.0.1 / 2016-04-19
==================
- [fix] Fix build to copy source JSON files to build output.


1.0.0 / 2016-04-19
==================
- [breaking] Rename `img-uses-alt` to `img-has-alt`
- [breaking] Rename `onlick-uses-role` to `onclick-has-role`
- [breaking] Rename `mouse-events-map-to-key-events` to `mouse-events-have-key-events`
- [breaking] Rename `use-onblur-not-onchange` to `no-onchange`
- [breaking] Rename `label-uses-for` to `label-has-for`
- [breaking] Rename `redundant-alt` to `img-redundant-alt`
- [breaking] Rename `no-hash-href` to `href-no-hash`
- [breaking] Rename `valid-aria-role` to `aria-role`

- [new] Implement `aria-props` rule
- [new] Implement `aria-proptypes` rule
- [new] Implement `aria-unsupported-elements` rule
- [new] Implement `onclick-has-focus` rule
- [new] Implement `role-has-required-aria-props` rule
- [new] Implement `role-supports-aria-props` rule
- [new] Implement `tabindex-no-positive` rule


0.6.2 / 2016-04-08
==================
- [fix] Fix rule details for img-uses-alt: allow alt="" or role="presentation".


0.6.1 / 2016-04-07
==================
- [fix] Do not infer interactivity of components that are not low-level DOM elements.


0.6.0 / 2016-04-06
==================
- [breaking] Allow alt="" when role="presentation" on img-uses-alt rule.
- [new] More descriptive error messaging for img-uses-alt rule.


0.5.2 / 2016-04-05
==================
- [fix] Handle token lists for valid-aria-role.


0.5.1 / 2016-04-05
==================
- [fix] Handle null valued props for valid-aria-role.


0.5.0 / 2016-04-02
==================
- [new] Implement valid-aria-role rule. Based on [AX_ARIA_01](https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_aria_01)


0.4.3 / 2016-03-29
==================
- [fix] Handle LogicalExpression attribute types when extracting values. LogicalExpressions are of form `<Component prop={foo || "foobar"} />`


0.4.2 / 2016-03-24
==================
- [fix] Allow component names of form `Object.Property` i.e. `UX.Layout`


0.3.0 / 2016-03-02
==================
- [new] Implement [no-hash-href](docs/rules/no-hash-href.md) rule.
- [fix] Fixed TemplateLiteral AST value building to get more exact values from template strings.


0.2.0 / 2016-03-01
==================
- [new] Implement [redunant-alt](docs/rules/redundant-alt.md) rule.


0.1.2 / 2016-03-01
==================
- Initial pre-release.
