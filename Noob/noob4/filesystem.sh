#!/bin/bash
# Created by Ben Okopnik on Wed Jul 16 18:04:33 EDT 2008

########    User settings     ############
MAXDIRS=1
MAXDEPTH=2
MAXFILES=1
MAXSIZE=100
flagidc=8292
######## End of user settings ############
mkdir flag
cd flag
# How deep in the file system are we now?
TOP=`pwd|tr -cd '/'|wc -c`
counter=0
populate() {

	cd $1
	curdir=$PWD

	files=20
	for n in `seq $files`
	do
		f=`mktemp XXXXXX`
		size=90000
		head -c $size /dev/urandom > $f
		# echo $counter 
		counter=$((counter+1))
		if [ $counter -eq 8292 ]
		then
			echo $counter 
			echo "His palms are spaghetti, weak sweater, are heavy. There's vomit on his knees already, mom's sweaty flag. UiTHack23{m0m'55p46h3771}" > feelingNostalgicYet.txt
		fi
	done

	depth=`pwd|tr -cd '/'|wc -c`
	


	
	if [ $(($depth-$TOP)) -ge $MAXDEPTH ]
	then
		return
	fi
	
	
	

	unset dirlist
	dirs=20
	for n in `seq $dirs`
	do
		d=`mktemp -d XXXXXX`
		dirlist="$dirlist${dirlist:+ }$PWD/$d"
	done

	for dir in $dirlist
	do
		populate "$dir"
	
	done
}

populate $PWD