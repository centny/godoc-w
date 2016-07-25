the golang http api document
===

### Features
* support golang standard `http` handler and `gwf/routing` handler 
* `.md` file supported(need the `pandoc` command)

### Install
* install `go`/`npm`/`gulp`/`bower`
* install `pandoc` command,if your want to support .md file (optional)
* clone the server script by `git clone https://github.com/Centny/script-set`
* clone the server script by `git clone https://github.com/Centny/godoc-w`
* build pacakge

	```
	cd godoc-w
	./pkg.sh file://`pwd`/../script-set
	```
* copy `pkg/gdw.zip` to install location

	```
	useradd gdwd
	cd <gdwd home>
	cp xx/gdw.zip gdw.zip
	unzip gdw.zip
	cd gdw
	./install.sh -i gdwd
	
	```
* upddate the configure `/etc/init.d/gdwd`, change `arg_l=""` to `arg_l="-addr :7012 -exc .*\.git -www www /home/jenkins/go/src/github.com/Centny/gwf/,<other go source path>"`
* start server `service gdwd start`
* open `http://x.x.x.x:7012` on browser

### Usage

doc:<https://github.com/Centny/gwf/blob/master/wdoc/README_cn.md>
examp:<https://github.com/Centny/gwf/tree/master/wdoc/test>


