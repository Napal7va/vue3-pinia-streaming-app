#!/bin.bash
while getopts ":i:d:" opt; do
    case $opt in
    i)FILEINPUT="$OPTARG"
    ;;
    d)DESTIONATION="$OPTARG"
    ;;
    \?)echo "Invalid option -$OPTARG" >&2
    ;;
    esac
done