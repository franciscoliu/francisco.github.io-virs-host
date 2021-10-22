$(function() {
    var cy = cytoscape({
        container: document.getElementById('cy'),
        style: [{
                selector: 'node',
                style: {
                    width: 50,
                    height: 50,
                    'background-color': '#61bffc',
                    "text-valign": "center",
                    "color": "white",
                    content: 'data(id)',
                }
            },
            {
                selector: 'edge',
                css: {
                    'curve-style': 'bezier',
                    "target-arrow-shape": "triangle",
                    "line-color": "black"
                }
            }
        ],
        // elements: {
        // nodes: [
        //     { data: { id: 'Spike' } },
        //     { data: { id: 'spike' } },
        //     { data: { id: 'ACE2' } },
        //     { data: { id: 'ACe2' } },
        //     { data: { id: 'Ace2' } },
        //     { data: { id: 'IRF3' } },
        //     { data: { id: 'IRf3' } },
        //     { data: { id: 'Irf3' } },
        //     { data: { id: 'B.taurus' } },
        //     { data: { id: 'G.gallus' } },
        //     { data: { id: 'H.sapien' } },
        //     { data: { id: 'SARS-CoV-2' } },
        //     { data: { id: 'SARS-CoV' } },
        //     { data: { id: 'PLPro' } },
        //     { data: { id: 'PLpro' } }

        // ],
        // edges: [
        //     { data: { id: 'e1', source: 'Spike', target: 'spike' } },
        //     { data: { id: 'e2', source: 'Spike', target: 'SARS-CoV' } },
        //     { data: { id: 'e3', source: 'PLPro', target: 'SARS-CoV-2' } },
        //     { data: { id: 'e4', source: 'spike', target: 'SARS-CoV-2' } },
        //     { data: { id: 'e5', source: 'spike', target: 'ACE2' } },
        //     { data: { id: 'e6', source: 'ACE2', target: 'H.sapien' } },
        //     { data: { id: 'e7', source: 'ACE2', target: 'ACe2' } },
        //     { data: { id: 'e8', source: 'ACE2', target: 'Ace2' } },
        //     { data: { id: 'e9', source: 'ACe2', target: 'Ace2' } },
        //     { data: { id: 'e10', source: 'ACe2', target: 'G.gallus' } },
        //     { data: { id: 'e11', source: 'Ace2', target: 'B.taurus' } },
        //     { data: { id: 'e12', source: 'IRF3', target: 'H.sapien' } },
        //     { data: { id: 'e13', source: 'IRf3', target: 'G.gallus' } },
        //     { data: { id: 'e14', source: 'Irf3', target: 'B.taurus' } },
        //     { data: { id: 'e15', source: 'IRF3', target: 'IRf3' } },
        //     { data: { id: 'e16', source: 'IRF3', target: 'Irf3' } },
        //     { data: { id: 'e17', source: 'IRf3', target: 'Irf3' } },
        //     { data: { id: 'e18', source: 'SARS-CoV-2', target: 'H.sapien' } },
        //     { data: { id: 'e19', source: 'PLpro', target: 'SARS-CoV' } },
        //     { data: { id: 'e20', source: 'PLpro', target: 'PLPro' } },
        //     { data: { id: 'e21', source: 'PLpro', target: 'IRF3' } },
        //     { data: { id: 'e22', source: 'Spike', target: 'ACE2' } },
        //     { data: { id: 'e23', source: 'SARS-CoV', target: 'H.sapien' } }
        // ]
        // },
        layout: {
            name: 'breadthfirst',
            directed: true,
            padding: 10,
            /* color: "#ffff00",*/
            fit: true
        },

    });
    var eles = cy.add([
        { group: 'nodes', data: { id: 'Spike' }, position: { x: 350, y: 100 } },
        { group: 'nodes', data: { id: 'spike' }, position: { x: 450, y: 100 } },
        { group: 'nodes', data: { id: 'ACE2' }, position: { x: 700, y: 100 } },
        { group: 'nodes', data: { id: 'ACe2' }, position: { x: 800, y: 70 } },
        { group: 'nodes', data: { id: 'Ace2' }, position: { x: 850, y: 140 } },
        { group: 'nodes', data: { id: 'IRF3' }, position: { x: 1000, y: 200 } },
        { group: 'nodes', data: { id: 'IRf3' }, position: { x: 1100, y: 200 } },
        { group: 'nodes', data: { id: 'Irf3' }, position: { x: 1180, y: 270 } },
        { group: 'nodes', data: { id: 'B.taurus' }, position: { x: 1050, y: 500 } },
        { group: 'nodes', data: { id: 'G.gallus' }, position: { x: 870, y: 500 } },
        { group: 'nodes', data: { id: 'H.sapien' }, position: { x: 760, y: 500 } },
        { group: 'nodes', data: { id: 'SARS-CoV-2' }, position: { x: 370, y: 500 } },
        { group: 'nodes', data: { id: 'SARS-CoV' }, position: { x: 230, y: 500 } },
        { group: 'nodes', data: { id: 'PLPro' }, position: { x: 180, y: 140 } },
        { group: 'nodes', data: { id: 'PLpro' }, position: { x: 100, y: 200 } },
        { group: 'edges', data: { id: 'e1', source: 'Spike', target: 'spike' } },
        { group: 'edges', data: { id: 'e2', source: 'Spike', target: 'SARS-CoV' } },
        { group: 'edges', data: { id: 'e3', source: 'PLPro', target: 'SARS-CoV-2' } },
        { group: 'edges', data: { id: 'e4', source: 'spike', target: 'SARS-CoV-2' } },
        { group: 'edges', data: { id: 'e5', source: 'spike', target: 'ACE2' } },
        { group: 'edges', data: { id: 'e6', source: 'ACE2', target: 'H.sapien' } },
        { group: 'edges', data: { id: 'e7', source: 'ACE2', target: 'ACe2' } },
        { group: 'edges', data: { id: 'e8', source: 'ACE2', target: 'Ace2' } },
        { group: 'edges', data: { id: 'e9', source: 'ACe2', target: 'Ace2' } },
        { group: 'edges', data: { id: 'e10', source: 'ACe2', target: 'G.gallus' } },
        { group: 'edges', data: { id: 'e11', source: 'Ace2', target: 'B.taurus' } },
        { group: 'edges', data: { id: 'e12', source: 'IRF3', target: 'H.sapien' } },
        { group: 'edges', data: { id: 'e13', source: 'IRf3', target: 'G.gallus' } },
        { group: 'edges', data: { id: 'e14', source: 'Irf3', target: 'B.taurus' } },
        { group: 'edges', data: { id: 'e15', source: 'IRF3', target: 'IRf3' } },
        { group: 'edges', data: { id: 'e16', source: 'IRF3', target: 'Irf3' } },
        { group: 'edges', data: { id: 'e17', source: 'IRf3', target: 'Irf3' } },
        { group: 'edges', data: { id: 'e18', source: 'SARS-CoV-2', target: 'H.sapien' } },
        { group: 'edges', data: { id: 'e19', source: 'PLpro', target: 'SARS-CoV' } },
        { group: 'edges', data: { id: 'e20', source: 'PLpro', target: 'PLPro' } },
        { group: 'edges', data: { id: 'e21', source: 'PLpro', target: 'IRF3' } },
        { group: 'edges', data: { id: 'e22', source: 'Spike', target: 'ACE2' } },
        { group: 'edges', data: { id: 'e23', source: 'SARS-CoV', target: 'H.sapien' } }
    ]);


    //Change some edges to curvature
    changecurve('e22', 'unbundled-bezier');
    changecurve('e23', 'unbundled-bezier');


    //Change the type of edge
    changearrow('e22', 'none');
    changearrow('e5', 'none');
    changearrow('e21', 'none');



    // Change the size of each node.
    cy.nodes('[id = "SARS-CoV-2"]').style('width', '100', 'height', 'data(height)');
    cy.nodes('[id = "SARS-CoV"]').style('width', '100', 'height', 'data(height)');
    cy.nodes('[id = "G.gallus"]').style('width', '80', 'height', 'data(height)');
    cy.nodes('[id = "B.taurus"]').style('width', '80', 'height', 'data(height)');
    cy.nodes('[id = "H.sapien"]').style('width', '80', 'height', 'data(height)');
    cy.nodes('[id = "PLpro"]').style('width', '60', 'height', 'data(height)');
    cy.nodes('[id = "PLPro"]').style('width', '60', 'height', 'data(height)');




    // Change the color of each edge.
    var similar = []; // An array to hold edge ID that are similar.
    for (let i = 0; i < cy.elements('edge').length; i++) {
        if (cy.elements('edge')[i].id() == 'e1' || cy.elements('edge')[i].id() == 'e20' || cy.elements('edge')[i].id() == 'e7' || cy.elements('edge')[i].id() == 'e8' ||
            cy.elements('edge')[i].id() == 'e9' || cy.elements('edge')[i].id() == 'e15' || cy.elements('edge')[i].id() == 'e16' || cy.elements('edge')[i].id() == 'e17') {
            similar.push(cy.elements('edge')[i].id());
        }

        ///This for loop change the edge between nodes that are similar to each other.
        for (let j = 0; j < similar.length; j++) {
            changecolor(similar[j], 'green');
            changewidth(similar[j], 5);
            changearrow(similar[j], 'none');
        }
    }

    //Change the color of other edges based on the relationship
    changecolor('e18', 'orange');
    changecolor('e23', 'orange');
    changecolor('e5', 'purple');
    changecolor('e22', 'purple');
    changecolor('e21', 'purple');

    // console.log(similar);


    //Change the width of edge based on the given relationship
    changewidth('e5', 5);
    changewidth('e22', 5);
    changewidth('e18', 5);
    changewidth('e23', 5);
    changewidth('e21', 5);


    //Change node color
    changenodecolor('spike', 'blue');
    changenodecolor('ACE2', 'red');
    changenodecolor('ACe2', 'black');
    changenodecolor('Ace2', 'orange');
    changenodecolor('G.gallus', 'black');
    changenodecolor('H.sapien', 'red');
    changenodecolor('IRF3', 'red');
    changenodecolor('IRf3', 'black');
    changenodecolor('Irf3', 'orange');
    changenodecolor('B.taurus', 'orange');
    changenodecolor('PLPro', 'blue');
    changenodecolor('SARS-CoV-2', 'blue');


    //Change the width of edge if necessary
    function changewidth(id, width) {
        for (let i = 0; i < cy.elements('edge').length; i++) {
            if (cy.elements('edge')[i].id() == id) {
                cy.elements('edge')[i].style('width', width);
            }
        }
    }


    //Change the color of edge if necessary
    function changecolor(id, color) {
        for (let i = 0; i < cy.elements('edge').length; i++) {
            if (cy.elements('edge')[i].id() == id) {
                cy.elements('edge')[i].style('line-color', color);
            }
        }
    }

    //change the type of edge if necessary
    function changearrow(id, type) {
        for (let i = 0; i < cy.elements('edge').length; i++) {
            if (cy.elements('edge')[i].id() == id) {
                cy.elements('edge')[i].style('target-arrow-shape', type);
            }
        }
    }

    //change the curve of edge if necessary
    function changecurve(id, curve) {
        for (let i = 0; i < cy.elements('edge').length; i++) {
            if (cy.elements('edge')[i].id() == id) {
                cy.elements('edge')[i].style('curve-style', curve);
            }
        }
    }


    //Change node color if necessary
    function changenodecolor(id, color) {
        for (let i = 0; i < cy.elements('node').length; i++) {
            if (cy.elements('node')[i].id() == id) {
                cy.elements('node')[i].style('background-color', color);
                color == 'white' ? changetextcolor(id, 'black') : changetextcolor(id, 'white');
            }
        }
    }

    //Change node id color if necessary
    function changetextcolor(id, color) {
        for (let i = 0; i < cy.elements('node').length; i++) {
            if (cy.elements('node')[i].id() == id) {
                cy.elements('node')[i].style('color', color);
            }
        }
    }

    cy.on('mouseover', 'node', function(event) {
        var evtTarget = event.target;
        evtTarget.qtip({
            content: this.id(),
            show: {
                event: event.type,
                ready: true
            },
            hide: {
                event: "mouseout unfocus"
            }
        }, event);
    });

    cy.on('click', 'node', function(evt) {
        // console.log('clicked ' + this.id());
        var div = document.createElement('div');
        var button = document.createElement('BUTTON');
        var text = document.createTextNode("Delete");
        button.appendChild(text);
        button.style.position = 'absolute';
        button.style.left = 0;
        button.style.margin = "5px";
        button.style.padding = "3px";
        div.style.height = "150px";
        div.style.borderStyle = "solid";
        div.style.borderColor = "grey";
        div.style.overflowY = "scroll";
        $(div).addClass("inner").html("Node: " + evt.target.id());
        $('#info').append(div);
        $(div).append(button);
        var divs = document.getElementsByTagName('div');
        for (let i = 0; i < divs.length; i++) {
            if (divs[i].innerHTML.indexOf(evt.target) == -1) {
                console.log('hello');
            }
        }
        $(document).on('click', ':button', function() {
            $(this).parent().remove();
        });
    });

    cy.on('click', 'edge', function(evt) {
        // console.log('clicked ' + this.id());
        var div = document.createElement('div');
        var button = document.createElement('BUTTON');
        var text = document.createTextNode("Delete");
        button.appendChild(text);
        button.style.position = 'absolute';
        button.style.left = 0;
        button.style.margin = "5px";
        button.style.padding = "3px";
        div.style.height = "150px";
        div.style.borderStyle = "solid";
        div.style.borderColor = "grey";
        div.style.overflowY = "scroll";

        $(div).addClass("inner").html("Edge: " + evt.target.id());
        // $(div).addClass("inner").html("Edge: " + evt.target.id().edge.sourceEndpoint());
        $('#info').append(div);
        $(div).append(button);
        $(document).on('click', ':button', function() {
            $(this).parent().remove();
        });
    });


    //Add a property to each edge elements that stands for the status of the edge.
    // If it is the same as what user selected, it would become true, if it is only partially satisfied, it would be buffer.
    //Ohterwise it would be false, the default value would be false.

    for (var i = 0; i < cy.elements('edge').length; i++) {
        cy.elements('edge')[i].data().flag = 'false';
    }


    //function sift(), it would check the select options from user and react about it.
    //If the source and target nodes chosen by the user appeared on the canvas, other nodes and edges would be faded.

    function sift() {
        var correct_tar;
        var correct_sour;
        var count = 0;
        var first_blank = $("#node :selected");
        var second_blank = $("#second_node :selected");

        // console.log(first_blank);
        if (first_blank.val() != "default" && second_blank.val() != "default") {
            for (var i = 0; i < cy.elements('edge').length; i++) {
                if (first_blank.text() == cy.elements('edge')[i].data().source && second_blank.text() == cy.elements('edge')[i].data().target) {
                    count++;
                    cy.elements('edge')[i].data().flag = 'true';
                } else if (first_blank.text() == cy.elements('edge')[i].data().source && second_blank.text() != cy.elements('edge')[i].data().target) {
                    cy.elements('edge')[i].data().flag = 'buffer';
                } else if (first_blank.text() != cy.elements('edge')[i].data().source && second_blank.text() == cy.elements('edge')[i].data().target) {
                    cy.elements('edge')[i].data().flag = 'buffer';
                }
                // console.log(cy.elements('edge')[i].data().flag);
            }
            if (count == 1) {
                console.log("True");
            } else {
                console.log("False");
            }
        } else {
            console.log("Please choose");
        }

        if (count == 1) {
            for (var j = 0; j < cy.elements('edge').length; j++) {
                if (cy.elements('edge')[j].data().flag == 'false' || cy.elements('edge')[j].data().flag == 'buffer') {
                    var edge_id = cy.elements('edge')[j].data().id;
                    if (cy.elements('edge')[j].id() == edge_id) {
                        cy.elements('edge')[j].style('opacity', "0.3");
                    }
                } else {
                    cy.elements('edge')[j].style('opacity', "1");
                    correct_sour = cy.elements('edge')[j].data().source;
                    correct_tar = cy.elements('edge')[j].data().target;
                }
            }

            for (var k = 0; k < cy.elements('node').length; k++) {
                if (cy.elements('node')[k].data().id != correct_sour && cy.elements('node')[k].data().id != correct_tar) {
                    cy.elements('node')[k].style('opacity', "0.3");
                } else {
                    cy.elements('node')[k].style('opacity', '1');
                }
            }
        } else {
            cy.elements().style('opacity', "1");
        }
    }

    //An settimeout function to react to the change made by the user.
    //The function will be triggered after 2s the user made the changes.

    $(document).on('change', '#node', function() {
        window.setTimeout(() => {
            sift();
        }, 500);
        $(document).on('change', '#second_node', function() {
            window.setTimeout(() => {
                sift();
            }, 500);
        })
    })



    // document.getElementById('submit').onclick = function() {
    //     sift();
    // }
    // var firstblank = document.getElementById("node");
    // var secondblank = document.getElementById("second_node");
    // var firstflag = false;
    // var secondflag = false;

    // firstblank.addEventListener('change', function() {
    //     // alert('change');
    //     firstflag = true;
    // });

    // secondblank.addEventListener('change', function() {
    //     // alert('change');
    //     secondflag = true;
    // });

    // if ($("#node :selected") == true && $("#second_node :selected") == true) {
    //     window.setInterval(function() {
    //         sift();
    //     }, 2000);
    // } else {
    //     clearInterval();
    // }


});