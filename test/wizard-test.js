var assert = require('chai').assert;
var Wizard = require('../exercises/wizard');

describe('Wizard', function() {

  it('should be a function', function() {
    assert.isFunction(Wizard);
  });

  it('should have a name', function() {
    var wizard = new Wizard({name: 'Jhun'});
    assert.equal(wizard.name, 'Jhun');
  });

  it('should have a different name', function() {
    var wizard = new Wizard({name: 'Will'});
    assert.equal(wizard.name, 'Will');
  });

  it('should have a beard by default', function() {
    var wizard = new Wizard({name: 'Jhun'});
    assert.equal(wizard.bearded, true);
  });

  it('should not always be bearded', function() {
    var wizard = new Wizard({name: 'Jhun', bearded: false});
    assert.equal(wizard.bearded, false)
  });

  it('should have root powers', function() {
    var wizard = new Wizard({name: 'Jhun', bearded: false});
    assert.equal(wizard.incantation('chown lumos'), 'CHOWN LUMOS');
  });

  it('should has lots of root powers', function() {
    var wizard = new Wizard({name: 'Jhun', bearded: false});
    assert.equal(wizard.incantation('Expecto Patronum'), 'EXPECTO PATRONUM');
  });

  it('should start rested', function() {
    var wizard = new Wizard({name: 'Jhun', bearded: false});
    assert.isTrue(wizard.rested)
  });

  it('should be able to cast spells', function() {
    var wizard = new Wizard({name: 'Jhun', bearded: false});
    assert.equal(wizard.cast(), 'MAGIC BULLET')
  });

  it('should only be able to cast 3 spells', function() {
    var wizard = new Wizard({name: 'Jhun', bearded: false});
    assert.isTrue(wizard.rested)
    wizard.cast()
    assert.isTrue(wizard.rested)
    wizard.cast()
    assert.isTrue(wizard.rested)
    wizard.cast()
    assert.isFalse(wizard.rested)
    assert.equal(wizard.cast(), 'I SHALL NOT CAST!!')
  });
});
