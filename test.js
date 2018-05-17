import test from 'ava'
import foofer from '.'

test('foo', t => t.is(foofer(), 'foo'))
