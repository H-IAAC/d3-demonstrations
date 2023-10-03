# d3-demonstrations

Este repositório contém várias demonstrações mostrando os conceitos do D3.js e sua possível integração com o jupyter notebook.

## Web demonstrations

### web1

Alguns conceitos básicos do D3.js são discutidos neste exemplo. O D3 é uma biblioteca de visualização de dados que utiliza SVG, Canvas e HTML. Ele possui ferramentas para manipulação do DOM que selecionam, modificam, adicionam e excluem elementos.
Os métodos mostrados neste exemplo são:

- **select** - Seleciona o primeiro elemento que corresponde à string seletora. Pode utilizar qualquer seletor do html, como o nome do elemento (div, p, h1 etc), id com hashtag ou classes com ponto;
- **selectAll** - Seleciona todos os elementos que correspondem à string seletora. Este método e o método `select` podem ser utilizados em conjunto um com o outro para selecionar elementos dentro daqueles que já foram selecionados;
- **data** - Define quais dados seram inseridos nos elementos selecionados;
- **enter** - Reserva espaços no DOM para dados que não tem elementos selecionados correspondentes;
- **append** - Adiciona elementos à seleção;
- **text** - Insere texto nos elementos selecionados;
- **exit** - Seleciona os elementos que não estão relacionados com os novos dados inseridos;
- **remove** - Remove os elementos selecionados.

### web2

Neste exemplo foi criada uma animação de círculo. Os novos métodos mostrados neste exemplo são:

- **attr** - Modifica determinado atributo da seleção;
- **style** - Modifica determinado estilo da seleção;
- **transition** - Cria um objeto de transição. Ao dar atributos e estilos a este objeto, o elemento irá se transicionar para estes atributos;
- **delay** - Define o quanto a transição demorará para começar;
- **duration** - Define a duração da transição.

### web3

Neste exemplo foi criado um gráfico de scatterplot utilizando dados de um arquivo, o gráfico foi gerado manipulando atributos de um elemento SVG.

### web4

Neste exemplo foi criado uma renderização adaptada do exemplo do [observablehq](https://observablehq.com/@d3/zoomable-circle-packing).

### web5

Neste exemplo foi criado um widget slider para interagir com o scatter plot utilizando somente Javascript.

## Dash components

Na pasta `dash_interface/` se encontra um boilerplate criado à partir deste [repositório](https://github.com/plotly/dash-typescript-component-template). À partir dele podem ser criados widgets customizados.

Tutorial de como criar widgets customizados se encontram neste [site](https://dash.plotly.com/react-for-python-developers).

## Ipywidgets

### Requisitos

- Node.js
- Yarn
- cookiecutter

### Cookiecutters

- **Javascript:** cookiecutter https://github.com/jupyter/widget-cookiecutter.git
- **Typescript:** cookiecutter https://github.com/jupyter-widgets/widget-ts-cookiecutter.git

### Tutorial instalação cookiecutter Javascript

- Criar ambiente virtual
- pip install -e .
- No arquivo "js/package.json", dentro de "devDependencies", mudar versão para: "@jupyterlab/builder": "^4.0.6"
- cd js
- npm install
- cd ..
- Para notebook rodar:
```console
    $ pip install --upgrade notebook==6.4.12
    $ pip install traitlets==5.9.0
    $ jupyter nbextension install --py --symlink --sys-prefix <python_package_name>
    $ jupyter nbextension enable --py --sys-prefix <python_package_name>
```
- Para jupyterlab rodar:
```console
    $ pip install jupyterlab
    $ jupyter labextension develop --overwrite <python_package_name>
```
- Para testar, criar notebook e rodar:
```python
    import jupyter_widget_example
    jupyter_widget_example.HelloWorld()
```

### Tutorial instalação cookiecutter Typescript

- Criar ambiente virtual
- pip install -e .
- No arquivo "package.json", dentro de "devDependencies", mudar versão para: "@jupyterlab/builder": "^4.0.6"
- npm install
- Para notebook rodar:
```console
    $ pip install --upgrade notebook==6.4.12
    $ pip install traitlets==5.9.0
    $ jupyter nbextension install --py --symlink --sys-prefix <python_package_name>
    $ jupyter nbextension enable --py --sys-prefix <python_package_name>
```
- Para jupyterlab rodar:
```console
    $ pip install jupyterlab
    $ jupyter labextension develop --overwrite <python_package_name>
```
- Para testar, criar notebook e rodar:
```python
    import jupyter_widget_example
    jupyter_widget_example.HelloWorld()
```

## Notebook demonstrations

### note1

Neste notebook é apresentado vários métodos de integrar o D3.js no jupyter .

### note2

Neste notebook é apresentada o encapsulamento do D3.js com Dash. Para utilizar é necessário rodar o comando:

    $ pip install dash_interface/

### note3

Este notebook é uma tentativa de interação com os dados de um aplicativo em Dash.

### note4

Este notebook é demonstra a aplicação de widgets customizados.

