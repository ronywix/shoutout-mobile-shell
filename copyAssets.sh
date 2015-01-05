SRC_DIR=/Users/ronyh/Documents/Titanium_Studio_Workspace/Shoutout/Resources/iphone
DEST_DIR=./Resources
DEST_IPHONE_DIR=${DEST_DIR}/iphone
DEST_TIPACK_DIR=${DEST_DIR}/tipack

rm -rf ${DEST_IPHONE_DIR}/*
rm -rf ${DEST_TIPACK_DIR}/animations/*
rm -rf ${DEST_TIPACK_DIR}/bgs/*
rm -rf ${DEST_TIPACK_DIR}/fonts/*
rm -rf ${DEST_TIPACK_DIR}/icons/*
rm -rf ${DEST_TIPACK_DIR}/skins/*

mkdir ${DEST_IPHONE_DIR}
mkdir ${DEST_TIPACK_DIR}

cp -a ${SRC_DIR}/animations/ ${DEST_TIPACK_DIR}/animations/
cp -a ${SRC_DIR}/bgs/ ${DEST_TIPACK_DIR}/bgs/
cp -a ${SRC_DIR}/icons/ ${DEST_TIPACK_DIR}/icons/
cp -a ${SRC_DIR}/skins/ ${DEST_TIPACK_DIR}/skins/
cp -a ${SRC_DIR}/fonts/ ${DEST_TIPACK_DIR}/fonts/
cp -a ${SRC_DIR}/*.png ${DEST_IPHONE_DIR}/


