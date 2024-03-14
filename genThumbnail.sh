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

ow=480
oh=360
FILENAME=${FILEINPUT##*/}
IMAGENAME="$DESTINATION${FILENAME%4.mp4}.jpg"
if[[ -f "$IMAGENAME"]]; then 
    echo "$IMAGENAME exists"
else
ffmpeg -threads 16 -i "$FILEINPUT" -ss 00:00:03 -filter "scale=max($ow\,a*$oh):max($oh\,$ow/a), crop=$ow:$oh" -pix_fmt
fi