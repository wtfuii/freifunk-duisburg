$(document).ready(function () {
        //popover for search-icon:
        $('[data-toggle="popover"]').popover({placement: "bottom", html: "true", title: "Suche"})

        //count of active nodes and clients for display in footer:
        var mapcount = function () {
            $.getJSON("/static/nodes.json", function (data) {
                var nodecount = 0;
                var clientcount = 0;
                $.each(data.nodes, function () {
                    if (this.firmware != null) {
                        nodecount += 1;
                    }
                })
                $.each(data.links, function () {
                    if (this.type == "client") {
                        clientcount += 1;
                    }
                })
                console.log(nodecount);
                console.log(clientcount)
                $(".mapcount").append('<li>Knoten online: ' + nodecount + '</li><li>Clients online: ' + clientcount + '</li>')
            })
        }
        mapcount();

        //style Forms:
        $("input[type!=submit], textarea").addClass("form-control");

        //adding sections for scrollspy:
        var h2s = $("h2");
        console.log(h2s);

        h2s.wrap(function(index){
            return "<section id='section"  + index + "'></section>";
        });

        h2s.each(function(index){
            links.append("a");
        });

    }
)