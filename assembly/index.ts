import {
  syscall
} from './env'

export function _start(): i32 {
  let str = "Hello World!"
  let strEncoded = String.UTF8.encode(str, true)
  syscall(2000, changetype<usize>(strEncoded), strEncoded.byteLength, 0, 0, 0, 0, 0b100000)
  return 0
}
