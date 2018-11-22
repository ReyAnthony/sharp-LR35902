import { RegisterHelper } from './register-helper';
import { CPU } from './cpu';
import { Memory } from './memory';

describe('RegisterHelper', () => {
  let cpu: CPU;
  let memory: Memory;
  let registerHelper: RegisterHelper;

  beforeEach(() => {
    memory = new Memory();
    cpu = new CPU(memory);
    registerHelper = new RegisterHelper(cpu);
  });

  // Flags
  it('should return the ZF flag', () => {
    cpu.af = 0b0000_0000_0000_0001;
    expect(registerHelper.readZF()).toBe(1);
  });

  it('should set the ZF flag', () => {
    registerHelper.setZF(1);
    expect(cpu.af).toBe(0b0000_0000_0000_0001);
  });

  it('should return the N flag', () => {
    cpu.af = 0b0000_0000_0000_0010;
    expect(registerHelper.readN()).toBe(1);
  });

  it('should set the N flag', () => {
    registerHelper.setN(1);
    expect(cpu.af).toBe(0b0000_0000_0000_0010);
  });

  it('should return the H flag', () => {
    cpu.af = 0b0000_0000_0000_0100;
    expect(registerHelper.readH()).toBe(1);
  });

  it('should set the H flag', () => {
    registerHelper.setH(1);
    expect(cpu.af).toBe(0b0000_0000_0000_0100);
  });

  it('should return the CY flag', () => {
    cpu.af = 0b0000_0000_0000_1000;
    expect(registerHelper.readCY()).toBe(1);
  });

  it('should set the CY flag', () => {
    registerHelper.setCY(1);
    expect(cpu.af).toBe(0b0000_0000_0000_1000);
  });

  // bitops
  it('should get the lower byte', () => {
    expect(registerHelper.getLowerByte(0b1100_0110_1010_1110)).toBe(0b1010_1110);
  });

  it('should get the higher byte', () => {
    expect(registerHelper.getHigherByte(0b1100_0110_1010_1110)).toBe(0b1100_0110);
  });

  it('should set the higher byte', () => {
    expect(registerHelper.setHigherByte(0b0000_0000_1011_1011, 0b0111_1100)).toBe(0b0111_1100_1011_1011);
  });

  it('should set the lower byte', () => {
    expect(registerHelper.setLowerByte(0b1011_1011_0000_0000, 0b0111_1100)).toBe(0b1011_1011_0111_1100);
  });

  it('should read a bit', () => {
    expect(registerHelper.readBit(0b0001, 0)).toBe(1);
    expect(registerHelper.readBit(0b0010, 1)).toBe(1);
    expect(registerHelper.readBit(0b1010, 2)).toBe(0);
  });

  it('should write a bit', () => {
    expect(registerHelper.setBit(0b0000, 0, 1)).toBe(0b0001);
    expect(registerHelper.setBit(0b0000, 2, 1)).toBe(0b0100);
    expect(registerHelper.setBit(0b0000, 0, 0)).toBe(0b0000);
  });

  // Regs
  it('should set the A register', () => {
    registerHelper.setA(0b1010_1100);
    expect(cpu.af).toBe(0b1010_1100_0000_0000);
  });

  it('should return the A register', () => {
    cpu.af = 0b1010_1110_0000_0000;
    expect(registerHelper.getA()).toBe(0b1010_1110);
  });
});
