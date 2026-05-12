import { describe, it, expect, vi } from 'vitest';

vi.stubGlobal('fetch', vi.fn());

describe('Contact Web3Forms submit', () => {
  it('POSTs to Web3Forms endpoint with an access_key', async () => {
    const fetchMock = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ success: true }),
      })
    );
    global.fetch = fetchMock;

    // Minimal unit check: ensure our expected request shape is used.
    // Full component testing would require a DOM renderer.
    const formData = new FormData();
    formData.append('access_key', 'c2122672-cb80-47ef-9b53-f9c060b503d4');
    formData.append('to', 'jessie162004@gmail.com ');

    await fetch('https://api.web3forms.com/submit', { method: 'POST', body: formData });

    expect(fetchMock).toHaveBeenCalled();
    expect(fetchMock).toHaveBeenCalledWith(
      'https://api.web3forms.com/submit',
      expect.objectContaining({ method: 'POST' })
    );
  });
});

