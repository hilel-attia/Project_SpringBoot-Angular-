package com.hilel.factures.entities;

import org.springframework.data.rest.core.config.Projection;

@Projection(name = "nomFac", types = { Facture.class })
public interface FactureProjection {
	public String getNomFacture();

}
