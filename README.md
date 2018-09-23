# inocli-js
Node JS Arduino-CLI wrapper


## Classes

<dl>
<dt><a href="#Board">Board</a></dt>
<dd></dd>
<dt><a href="#Config">Config</a></dt>
<dd></dd>
<dt><a href="#Lib">Lib</a></dt>
<dd></dd>
<dt><a href="#Sketch">Sketch</a></dt>
<dd></dd>
</dl>

<a name="Board"></a>

## Board
**Kind**: global class  

* [Board](#Board)
    * [new Board()](#new_Board_new)
    * [.attach(query)](#Board+attach)
    * [.list()](#Board+list) ⇒ <code>string</code>
    * [.listall()](#Board+listall) ⇒ <code>string</code>

<a name="new_Board_new"></a>

### new Board()
Board.

<a name="Board+attach"></a>

### board.attach(query)
Attaches a sketch to a board.

**Kind**: instance method of [<code>Board</code>](#Board)  

| Param | Type |
| --- | --- |
| query | <code>string</code> | 

<a name="Board+list"></a>

### board.list() ⇒ <code>string</code>
List connected boards.

**Kind**: instance method of [<code>Board</code>](#Board)  
**Returns**: <code>string</code> - JSON list of connected boards  
<a name="Board+listall"></a>

### board.listall() ⇒ <code>string</code>
List all known boards.

**Kind**: instance method of [<code>Board</code>](#Board)  
**Returns**: <code>string</code> - JSON list of known boards  
<a name="Config"></a>

## Config
**Kind**: global class  
**Todo**

- [ ] Add config manager


* [Config](#Config)
    * [new Config()](#new_Config_new)
    * [.init(path)](#Config+init)
    * [.dump()](#Config+dump) ⇒ <code>string</code>

<a name="new_Config_new"></a>

### new Config()
Config

<a name="Config+init"></a>

### config.init(path)
Init config

**Kind**: instance method of [<code>Config</code>](#Config)  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | Path of custom .cli-config.yml |

<a name="Config+dump"></a>

### config.dump() ⇒ <code>string</code>
Dump config file

**Kind**: instance method of [<code>Config</code>](#Config)  
**Returns**: <code>string</code> - dumped config JSON string  
<a name="Lib"></a>

## Lib
**Kind**: global class  
**Todo**

- [ ] add download method
- [ ] add install method
- [ ] add list method
- [ ] add uninstall method
- [ ] add updateIndex method
- [ ] add upgrade method


* [Lib](#Lib)
    * [new Lib()](#new_Lib_new)
    * [.search(libraryName)](#Lib+search)

<a name="new_Lib_new"></a>

### new Lib()
Lib

<a name="Lib+search"></a>

### lib.search(libraryName)
Search library

**Kind**: instance method of [<code>Lib</code>](#Lib)  

| Param | Type | Description |
| --- | --- | --- |
| libraryName | <code>string</code> | Library name |

<a name="Sketch"></a>

## Sketch
**Kind**: global class  

* [Sketch](#Sketch)
    * [new Sketch()](#new_Sketch_new)
    * [.new(sketchName)](#Sketch+new) ⇒ <code>string</code>

<a name="new_Sketch_new"></a>

### new Sketch()
Sketch

<a name="Sketch+new"></a>

### sketch.new(sketchName) ⇒ <code>string</code>
Create a new sketch

**Kind**: instance method of [<code>Sketch</code>](#Sketch)  
**Returns**: <code>string</code> - Created created path  

| Param | Type |
| --- | --- |
| sketchName | <code>string</code> | 


* * *