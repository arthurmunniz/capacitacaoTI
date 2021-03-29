            let filmes = [{
                id: 1,
                nome: "A VIÚVA DAS SOMBRAS",
                horario: "20:00",
                cadeirasDisponivel: 50,
                cadeirasUtilizadas: 0,
                valor: 'R$ 32,00',
                valorMeiaEntrada: 'R$ 16,00',
                url: 'https://www.kinoplex.com.br/filmes/images/cartaz/262x388/a-viuva-das-sombras.jpg?1611769808',
            }, {
                id: 2,
                nome: "JUDAS E O MESSIAS NEGRO",
                horario: "20:20",
                cadeirasDisponivel: 50,
                cadeirasUtilizadas: 0,
                valor: 'R$ 32,00',
                valorMeiaEntrada: 'R$ 16,00',
                url: "https://www.kinoplex.com.br/filmes/images/cartaz/262x388/judas-e-o-messias-negro.jpg?1611769808",
            }, {
                id: 3,
                nome: "LEGADO EXPLOSIVO",
                horario: "22:20",
                cadeirasDisponivel: 50,
                cadeirasUtilizadas: 0,
                valor: 'R$ 32,00',
                valorMeiaEntrada: 'R$ 16,00',
                url: "https://www.kinoplex.com.br/filmes/images/cartaz/262x388/legado-explosivo.jpg?1603926228"
            }, {
                id: 4,
                nome: "LUCICREIDE VAI PRA MARTE",
                horario: "20:20",
                cadeirasDisponivel: 50,
                cadeirasUtilizadas: 0,
                valor: 'R$ 32,00',
                valorMeiaEntrada: 'R$ 16,00',
                url: "https://www.kinoplex.com.br/filmes/images/cartaz/262x388/lucicreide-vai-pra-marte.jpg?1613151628"
            }, {
                id: 5,
                nome: "MONSTER HUNTER",
                horario: "20:00",
                cadeirasDisponivel: 50,
                cadeirasUtilizadas: 0,
                valor: 'R$ 32,00',
                valorMeiaEntrada: 'R$ 16,00',
                url: "https://www.kinoplex.com.br/filmes/images/cartaz/262x388/monster-hunter.jpg?1613685557"
            }, {
                id: 6,
                nome: "MULHER-MARAVILHA 1984",
                horario: "20:20",
                cadeirasDisponivel: 50,
                cadeirasUtilizadas: 0,
                valor: 'R$ 32,00',
                valorMeiaEntrada: 'R$ 16,00',
                url: "https://www.kinoplex.com.br/filmes/images/cartaz/262x388/mulher-maravilha-1984.jpg?1608152882"
            }, {
                id: 7,
                nome: "O MENSAGEIRO DO ÚLTIMO DIA",
                horario: "22:20",
                cadeirasDisponivel: 50,
                cadeirasUtilizadas: 0,
                valor: 'R$ 32,00',
                valorMeiaEntrada: 'R$ 16,00',
                url: "https://www.kinoplex.com.br/filmes/images/cartaz/262x388/o-mensageiro-do-ultimo-dia.jpg?1603926228"
            }, {
                id: 8,
                nome: "RAYA E O ÚLTIMO DRAGÃO",
                horario: "20:20",
                cadeirasDisponivel: 50,
                cadeirasUtilizadas: 0,
                valor: 'R$ 32,00',
                valorMeiaEntrada: 'R$ 16,00',
                url: "https://www.kinoplex.com.br/filmes/images/cartaz/262x388/raya-e-o-ultimo-dragao.jpg?1608573609"
            }, {
                id: 9,
                nome: "SEM SAÍDA",
                horario: "22:20",
                cadeirasDisponivel: 50,
                cadeirasUtilizadas: 0,
                valor: 'R$ 32,00',
                valorMeiaEntrada: 'R$ 16,00',
                url: "https://www.kinoplex.com.br/filmes/images/cartaz/262x388/sem-saida.jpg?"
            }, {
                id: 10,
                nome: "TOM E JERRY - O FILME",
                horario: "20:20",
                cadeirasDisponivel: 50,
                cadeirasUtilizadas: 0,
                valor: 'R$ 32,00',
                valorMeiaEntrada: 'R$ 16,00',
                url: "https://www.kinoplex.com.br/filmes/images/cartaz/262x388/tom-e-jerry-o-filme.jpg?1612801086"
            }];

            function exibirFilmes() {
                let table = "<table border = '1'>" +
                    "<thead>" +
                    "<tr>" +
                    "<th></th>" +
                    "<th>Banner</th>" +
                    "<th>Nome do Filme</th>" +
                    "<th>Horario</th>" +
                    "<th>Cadeiras Disponiveis</th>" +
                    "<th>Cadeiras Utilizadas</th>" +
                    "<th>Valor</th>" +
                    "<th>Valor Meia Entrada</th>" +
                    "</tr>" +
                    "</thead>" +
                    "<tbody>";

                filmes.forEach(function(value) {
                    let linha = '<tr>' +
                        '<td><input type="checkbox" id="check' + value['id'] + '" value="' + value['id'] + '"/></td>' +
                        '<td>' + '<img src="' + value['url'] + '" style="width: 200px; height: 240px;">' + '</td>' +
                        '<td style="text-align: center;">' + value['nome'] + '</td>' +
                        '<td style="text-align: center;">' + value['horario'] + '</td>' +
                        '<td style="text-align: center;">' + value['cadeirasDisponivel'] + '</td>' +
                        '<td style="text-align: center;">' + value['cadeirasUtilizadas'] + '</td>' +
                        '<td style="text-align: center;"><input type="checkbox" id="valor' + value['id'] + '" value="' + value['valor'] + '"/>' + value['valor'] + '</td>' +
                        '<td style="text-align: center;"><input type="checkbox" id="valorMeiaEntrada' + value['id'] + '" value="' + value['valorMeiaEntrada'] + '"/>' + value['valorMeiaEntrada'] + '</td>' +
                        '</tr>';

                    table += linha;
                });

                table += '</tbody>' +
                    '</table>' +
                    '<br><button type="button" id="comprar" onClick="comprarFilme()">Comprar Filme</button>';

                document.getElementById("table").innerHTML = table;
                document.getElementById("comprovante").innerHTML = '';
            }

            function exibirComprovante(id) {
                for (let i in filmes) {
                    if (filmes[i]['id'] == id) {
                        var valor = document.getElementById("valor" + id).value;
                        var valorMeiaEntrada = document.getElementById("valorMeiaEntrada" + id).value;
                        let cadeira = (i + 1) * 2;

                        if (document.getElementById("valor" + id).checked == false) {
                            valor = valorMeiaEntrada;
                        }
                        console.log(valor);

                        let table = "<table border = '1'>" +
                            "<thead>" +
                            "<tr>" +
                            "<th>Nome do Filme</th>" +
                            "<th>Cadeira</th>" +
                            "<th>Data | Horario</th>" +
                            "<th>Valor</th>" +
                            "</thead>" +
                            "<tbody>" +
                            '<tr>' +
                            '<td>' + filmes[i]['nome'] + '</td>' +
                            '<td>' + cadeira + '</td>' +
                            '<td>' + '29/03/2021    |    ' + filmes[i]['horario'] + '</td>' +
                            '<td>' + valor + '</td>' +
                            '</tr>' +
                            '</tbody>';

                        document.getElementById("comprovante").innerHTML = table;
                    }
                }
                document.getElementById("table").innerHTML = '';
                document.getElementById("comprovante").innerHTML += '<br><button type="button" id="comprar" onClick="exibirFilmes()">Comprar Mais</button>';

            }

            function comprarFilme() {
                let id = '';
                let id1 = document.getElementById('check1');
                let id2 = document.getElementById('check2');
                let id3 = document.getElementById('check3');
                let id4 = document.getElementById('check4');
                let id5 = document.getElementById('check5');
                let id6 = document.getElementById('check6');
                let id7 = document.getElementById('check7');
                let id8 = document.getElementById('check8');
                let id9 = document.getElementById('check9');
                let id10 = document.getElementById('check10');

                if (id1.checked == true) {
                    id = id1['value'];
                }

                if (id2.checked == true) {
                    id = id2['value'];
                }

                if (id3.checked == true) {
                    id = id3['value'];
                }

                if (id4.checked == true) {
                    id = id4['value'];
                }

                if (id5.checked == true) {
                    id = id5['value'];
                }

                if (id6.checked == true) {
                    id = id6['value'];
                }

                if (id7.checked == true) {
                    id = id7['value'];
                }

                if (id8.checked == true) {
                    id = id8['value'];
                }

                if (id9.checked == true) {
                    id = id9['value'];
                }

                if (id10.checked == true) {
                    id = id10['value'];
                }

                for (var i in filmes) {
                    if (filmes[i]['id'] == id) {
                        filmes[i].cadeirasUtilizadas += 1;
                        filmes[i].cadeirasDisponivel -= 1;
                    }
                }

                exibirFilmes()

                exibirComprovante(id)
            }