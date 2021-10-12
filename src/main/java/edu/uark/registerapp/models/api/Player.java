package edu.uark.registerapp.models.api;

import org.apache.commons.lang3.StringUtils;

import edu.uark.registerapp.models.entities.PlayerEntity;

public class Player extends ApiResponse{
    private int id;
	public int getId() {
		return this.id;
	}
	public Player setId(int playerId) {
		this.id = playerId;
		return this;
	}

	private String codename;

	public String getCodename() {
		return this.codename;
	}

	public Player setCodename(final String codename) {
		this.codename = codename;
		return this;
	}

	private String firstName;

	public String getfirstName() {
		return this.firstName;
	}

	public Player setFirstName(final String firstName) {
		this.firstName = firstName;
		return this;
	}

	private String lastName;

	public String getLastName() {
		return this.lastName;
	}

	public Player setLastName(final String lastName) {
		this.lastName = lastName;
		return this;
	}


	public Player() {
		super();

		this.codename = StringUtils.EMPTY;
		this.id = 0;
		this.firstName = StringUtils.EMPTY;
		this.lastName = StringUtils.EMPTY;
	}

	public Player(final PlayerEntity playerEntity) {
		super(false);

		this.id = playerEntity.getId();
		this.firstName = playerEntity.getFirstName();
		this.lastName = playerEntity.getLastName();
		this.codename = playerEntity.getCodename();
	}
}
