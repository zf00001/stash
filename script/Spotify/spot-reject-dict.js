// 等价于 Loon 的 reject-dict：直接返回 200 空 JSON
$done({
  response: {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
    body: '{}'
  }
});
