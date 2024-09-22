import {sayHello} from '../js/main.js';

QUnit.module('hello', function() {

    QUnit.test('make sure the hello function says hello', function(assert) {
        var result = sayHello();
        assert.equal(result, 'hello');
    });
    


});

QUnit.module('changeBackground', function() {

    QUnit.test ('make sure the background color changes', function(assert) {
    const currColor = document.body.style.backgroundColor;

    const newColor = document.body.style.backgroundColor = '#ddddee';
    assert.notEqual(newColor, currColor);
    });
    
});

