//neural network

var Neural = function(Neural) {
    'use strict'; //allows function in strict operating context - prevents certain/unexpected actions from running - safety check

    function getSizes(nodes) { //feedforward NN - 3 layer / 128 hidden nodes - mcb180x(check it out)
        return nodes.map(function(layer) {
            return layer.length;
        });
    }

    function makeNode(layerIndex, index, sizes, nodes) {
        //init
        var node = {
            input: 0
        }

        //threshold
        
    }
};