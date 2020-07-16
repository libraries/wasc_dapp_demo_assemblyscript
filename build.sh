wasc="/src/wasc"

npm run asbuild
cd build
${wasc}/build/wasc -v --platform ckb_vm_assemblyscript --gcc ${wasc}/third_party/ckb-riscv-gnu-toolchain/build/bin/riscv64-unknown-elf-gcc optimized.wat
