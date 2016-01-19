  var code = require('../main');
  var expect = require('chai').expect;

    describe('leapYear', function() {
    it('A leap year is perfectly divisible by four', function(){
      expect(code.leapYear(1)).to.equal(false);
    });
  });

    describe('leapYear', function() {
    it('A leap year is perfectly divisible by four', function(){
      expect(code.leapYear(2)).to.equal(false);
    });
  });

    describe('leapYear', function() {
    it('A leap year is perfectly divisible by four', function(){
      expect(code.leapYear(3)).to.equal(false);
    });
  });

    describe('leapYear', function() {
    it('A leap year is perfectly divisible by four', function(){
      expect(code.leapYear(4)).to.equal(true);
    });
  });

    describe('leapYear', function() {
    it('A leap year is perfectly divisible by four', function(){
      expect(code.leapYear(5)).to.equal(false);
    });
  });

    describe('leapYear', function() {
    it('A leap year is perfectly divisible by four', function(){
      expect(code.leapYear(1600)).to.equal(true);
    });
  });

    describe('leapYear', function() {
    it('A leap year is perfectly divisible by four', function(){
      expect(code.leapYear(1700)).to.equal(false);
    });
  });

    describe('leapYear', function() {
    it('A leap year is perfectly divisible by four', function(){
      expect(code.leapYear(1800)).to.equal(false);
    });
  });

    describe('leapYear', function() {
    it('A leap year is perfectly divisible by four', function(){
      expect(code.leapYear(1900)).to.equal(false);
    });
  });

    describe('leapYear', function() {
    it('A leap year is perfectly divisible by four', function(){
      expect(code.leapYear(2000)).to.equal(true);
    });
  });

