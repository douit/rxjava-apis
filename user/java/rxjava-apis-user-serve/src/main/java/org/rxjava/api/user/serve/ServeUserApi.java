package org.rxjava.api.user.serve;

import reactor.core.publisher.Mono;

import java.util.*;
import java.util.Map.Entry;
import java.util.concurrent.Future;

import org.rxjava.apikit.client.*;

import org.rxjava.api.user.serve.entity.LoginInfo;
import org.rxjava.api.user.serve.entity.User;

public class ServeUserApi {
	private ClientAdapter clientAdapter;

	public ServeUserApi() {
	}

	public ServeUserApi(ClientAdapter clientAdapter) {
		this.clientAdapter = clientAdapter;
	}

	public Mono<LoginInfo> tokenToLoginInfo(String token) {
		Map<String, Object> _uriVariables = new HashMap<>();
		_uriVariables.put("token", token);
		String _url = ApiUtils.expandUriComponent("serve/token/{token}/logininfo", _uriVariables);

		return clientAdapter.request("GET", _url, null, _0Type);
	}

	public Mono<User> tokenToUser(String token) {
		Map<String, Object> _uriVariables = new HashMap<>();
		_uriVariables.put("token", token);
		String _url = ApiUtils.expandUriComponent("serve/token/{token}/user", _uriVariables);

		return clientAdapter.request("GET", _url, null, _1Type);
	}

	public void setclientAdapter(ClientAdapter clientAdapter) {
		this.clientAdapter = clientAdapter;
	}

	public ClientAdapter getclientAdapter() {
		return clientAdapter;
	}

	private static final ApiType _0Type = ApiUtils.type(LoginInfo.class);
	private static final ApiType _1Type = ApiUtils.type(User.class);
}