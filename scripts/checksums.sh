#!/bin/bash

echo $1

md5 $1
shasum -a 1 $1
shasum -a 256 $1
shasum -a 512 $1

