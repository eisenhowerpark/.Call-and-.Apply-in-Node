var obj = {
    name: '', // We can fill this in upon calling this function
    greet: function(race, gender) {
        console.log(`Greetings, ${ this.name }`);
        // From now on, we might as well use Template Literal syntax for stuff like this.
    }
}

obj.greet.call({ name: 'John Dough' });

obj.greet.call({ name: 'Marge Simpson' }); // .call invokes the function just like (); would.
// However, adding the parameters allows us to create new objects upon which to call, on the fly.

obj.greet.apply({ name: 'Negro Claus' }, ['black', 'male'])
// .apply accomplishes the same task, but allows the addition of an array of new parameters.
// We won't console.log this stuff.